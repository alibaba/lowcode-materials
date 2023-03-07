import React, { ReactNode } from "react";
import assign from "lodash/assign";
import deepcopy from 'lodash/cloneDeep';
import WebCustomColumnDrawer from "../component/webCustomColumnDrawer";
import filterColumn from "../utils/filterColumn";
import type WebTable from "../table/webTable";
import { IWebTableProps } from "../table/webTable";

export interface IColumnMethods {
    init(this: WebTable): void;
    showCustomColumnDrawer(this: WebTable): void;
    hideCustomColumnDrawer(this: WebTable): void;
    setOriginalColumns(this: WebTable, columns: IWebTableProps['columns']): void;
    changeCurrentColumns(this: WebTable, columns: IWebTableProps['columns']): void;
    renderCustomColumnDrawer(this: WebTable): ReactNode;
}

const methods: IColumnMethods = {
    init() {
        const { columns = [] } = this.props;

        const mergeState = {
            isCustomColumnDrawerShown: false,
            originalColumns: deepcopy(columns),
            currentColumns: filterColumn(columns),
        };

        this.state = this.state || {};
        assign(this.state, mergeState);
    },

    showCustomColumnDrawer() {
        this.setState({
            isCustomColumnDrawerShown: true,
        });
    },

    hideCustomColumnDrawer() {
        this.setState({
            isCustomColumnDrawerShown: false,
        });
    },

    setOriginalColumns(columns) {
        this.setState({
            originalColumns: deepcopy(columns),
        });
    },

    changeCurrentColumns(columns) {
        this.setState({
            currentColumns: filterColumn(columns),
        });
    },
    renderCustomColumnDrawer() {
        const { isCustomColumnDrawerShown, originalColumns } = this.state;
        const { nextTablePrefix, locale, onColumnsChange = () => { } } = this.props;

        return (
            <WebCustomColumnDrawer
                locale={locale}
                columns={originalColumns}
                nextTablePrefix={nextTablePrefix}
                visible={isCustomColumnDrawerShown}
                onClose={this.hideCustomColumnDrawer.bind(this)}
                onOk={(columns) => {
                    this.changeCurrentColumns(columns);
                    onColumnsChange(columns)
                    this.hideCustomColumnDrawer();
                }}
            />
        );
    },
};

export default methods;
