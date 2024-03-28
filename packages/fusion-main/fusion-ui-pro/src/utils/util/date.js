'use strict';

exports.__esModule = true;

const _dayjs = require('dayjs');

const _dayjs2 = _interopRequireDefault(_dayjs);

const _customParseFormat = require('dayjs/plugin/customParseFormat');

const _customParseFormat2 = _interopRequireDefault(_customParseFormat);

const _updateLocale = require('dayjs/plugin/updateLocale');

const _updateLocale2 = _interopRequireDefault(_updateLocale);

const _localeData = require('dayjs/plugin/localeData');

const _localeData2 = _interopRequireDefault(_localeData);

const _quarterOfYear = require('dayjs/plugin/quarterOfYear');

const _quarterOfYear2 = _interopRequireDefault(_quarterOfYear);

const _advancedFormat = require('dayjs/plugin/advancedFormat');

const _advancedFormat2 = _interopRequireDefault(_advancedFormat);

const _weekOfYear = require('dayjs/plugin/weekOfYear');

const _weekOfYear2 = _interopRequireDefault(_weekOfYear);

require('dayjs/locale/zh-cn');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_dayjs2.default.extend(_advancedFormat2.default);
_dayjs2.default.extend(_quarterOfYear2.default);
_dayjs2.default.extend(_customParseFormat2.default);
_dayjs2.default.extend(_updateLocale2.default);
_dayjs2.default.extend(_localeData2.default);
_dayjs2.default.extend(_weekOfYear2.default);
_dayjs2.default.locale('zh-cn');

const datejs = _dayjs2.default;
datejs.isSelf = _dayjs2.default.isDayjs;

_dayjs2.default.localeData();

exports.default = datejs;
module.exports = exports.default;
