import errorRender from './errorRender';
import defaultRender from './defaultRender';
import Formatter from '../formatter';

export default function moneyRender(cellData: {
  amount: string;
  currency: string;
} | string) {
    if (cellData === undefined || cellData === null) {
        return '';
    }

    let money;
    if (typeof cellData === 'object') {
        if (!cellData.hasOwnProperty('amount') || !cellData.hasOwnProperty('currency')) {
            return errorRender();
        }
        try {
            money = Formatter.money(cellData.amount || '0', ',', 2);
        } catch (e) {
            return errorRender();
        }
        return defaultRender(`${money} ${cellData.currency}`);
    }

    try {
        money = Formatter.money(cellData || '0', ',', 2);
    } catch (e) {
        return errorRender();
    }

    return defaultRender(money);
};
