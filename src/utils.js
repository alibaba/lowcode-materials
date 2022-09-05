module.exports = {
  replacer(key, value) {
    if (typeof value === 'function') {
      return {
        type: 'JSFunction',
        value: String(value),
      };
    }

    return value;
  },
  isAsyncFunction: (fn) => {
    return fn[Symbol.toStringTag] === 'AsyncFunction';
  },
  reviewer(key, value) {
    if (!value) {
      return value;
    }
    if (key === 'icon') {
      if (typeof value === 'object') {
        return {
          type: 'smile',
          size: 'small',
        };
      }
    }
    if (typeof value === 'object') {
      if (value.type === 'JSFunction') {
        let _value = value.value && value.value.trim();
        let template = `
          return function lowcode() {
            const self = this;
            try {
              return (${_value}).apply(self, arguments);
            } catch(e) {
              console.log('call function which parsed by lowcode for key ${key} failed: ', e);
              return e.message;
            }
          };`;
        try {
          return Function(template)();
        } catch (e) {
          if (e && e.message.includes("Unexpected token '{'")) {
            console.log('method need add funtion prefix');
            _value = 'function ' + _value;
            template = `
            return function lowcode() {
              const self = this;
              try {
                return (${_value}).apply(self, arguments);
              } catch(e) {
                console.log('call function which parsed by lowcode for key ${key} failed: ', e);
                return e.message;
              }
            };`;
            return Function(template)();
          }
          console.error('parse lowcode function error: ', e);
          console.error(value);
          return value;
        }
      }
    }
    return value;
  },
  toJson(object, replacer) {
    return JSON.stringify(object, replacer || this.replacer, 2);
  },
  parseJson(json) {
    const input = typeof json === 'string' ? json : JSON.stringify(json);
    return JSON.parse(input, this.reviewer);
  },
  calculateDependencies(schema, componentsMap) {
    function findComps(schema, componentsMap, dependencies) {
      dependencies = dependencies || {};
      if (dependencies[schema.componentName]) {
        dependencies[schema.componentName].count++;
      } else {
        dependencies[schema.componentName] = {
          count: 1,
        };
        if (componentsMap && componentsMap[schema.componentName]) {
          dependencies[schema.componentName].npm = componentsMap[schema.componentName].package;
          dependencies[schema.componentName].version = componentsMap[schema.componentName].version;
        }
      }
      if (schema.children && Array.isArray(schema.children)) {
        schema.children.forEach((child) => {
          dependencies = Object.assign(dependencies, findComps(child, componentsMap, dependencies));
        });
      }
      return dependencies;
    }
    const comps = findComps(schema, componentsMap);
    const deps = {};
    Object.keys(comps).forEach((key) => {
      const comp = comps[key];
      if (!comp.npm) comp.npm = 'BuiltIn';
      if (deps[`${comp.npm}${comp.version ? '@' + comp.version : ''}`]) {
        deps[`${comp.npm}${comp.version ? '@' + comp.version : ''}`][key] = comp.count;
      } else {
        deps[`${comp.npm}${comp.version ? '@' + comp.version : ''}`] = {
          [key]: comp.count,
        };
      }
    });
    return deps;
  },
};
