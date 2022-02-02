/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createDecorator } from 'vs/platform/instantiation/common/instantiation';
import { IHistoryService } from 'vs/workbench/services/history/common/history';

export const IHistoryService2 = createDecorator<IHistoryService2>('historyService2');

export interface IHistoryService2 extends IHistoryService {

	readonly _serviceBrand: undefined;
}
