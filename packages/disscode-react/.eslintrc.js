module.exports = {
  extends: [
    'eslint-config-ali/typescript/react',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  // plugins: ['import'],
  // globals: {
  //   ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
  //   page: true,
  //   REACT_APP_ENV: true,
  // },
  rules: {
    // 'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': [
      0,
      {
        // 允许声明未使用变量
        vars: 'local',
        // 参数不检查
        args: 'none',
      },
    ],
    'no-unused-vars': [
      0,
      {
        // 允许声明未使用变量
        vars: 'local',
        // 参数不检查
        args: 'none',
      },
    ],
    'no-shadow': 0,
    'no-nested-ternary': 0,
    // '@typescript-eslint/no-shadow': 0,
    // 'no-unused-expressions': 'off',
    // '@typescript-eslint/no-unused-expressions': ['error'],
    // '@typescript-eslint/consistent-type-imports': [
    //   'error',
    //   {
    //     prefer: 'no-type-imports',
    //     disallowTypeAnnotations: false,
    //   },
    // ],
    // 'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
  },
};
