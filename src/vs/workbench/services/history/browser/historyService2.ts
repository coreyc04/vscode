/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable } from 'vs/base/common/lifecycle';
import { URI } from 'vs/base/common/uri';
import { IResourceEditorInput } from 'vs/platform/editor/common/editor';
import { GroupIdentifier } from 'vs/workbench/common/editor';
import { EditorInput } from 'vs/workbench/common/editor/editorInput';
import { IHistoryService } from 'vs/workbench/services/history/common/history';
import { IHistoryService2 } from 'vs/workbench/services/history/common/history2';
import { registerSingleton } from 'vs/platform/instantiation/common/extensions';

export class HistoryService2 extends Disposable implements IHistoryService2 {

	declare readonly _serviceBrand: undefined;

	constructor(
		@IHistoryService private readonly historyService: IHistoryService
	) {
		super();
	}

	//#region Navigation: Go Forward, Go Backward (limit: 50)

	forward(): void {
		return this.historyService.forward();
	}

	back(): void {
		return this.historyService.back();
	}

	last(): void {
		return this.historyService.last();
	}

	//#endregion

	//#region Navigation: Next/Previous Used Editor

	openNextRecentlyUsedEditor(group?: GroupIdentifier): void {
		return this.historyService.openNextRecentlyUsedEditor(group);
	}

	openPreviouslyUsedEditor(group?: GroupIdentifier): void {
		return this.historyService.openPreviouslyUsedEditor(group);
	}

	//#endregion

	//#region File: Reopen Closed Editor (limit: 20)

	reopenLastClosedEditor(): void {
		return this.historyService.reopenLastClosedEditor();
	}

	//#endregion

	//#region Go to: Last Edit Location (limit: 1)

	openLastEditLocation(): void {
		return this.historyService.openLastEditLocation();
	}

	//#endregion

	//#region Go to: Recently Opened Editor (limit: 200, persisted)

	getHistory(): readonly (EditorInput | IResourceEditorInput)[] {
		return this.historyService.getHistory();
	}

	clearRecentlyOpened(): void {
		return this.historyService.clearRecentlyOpened();
	}

	removeFromHistory(input: EditorInput | IResourceEditorInput): void {
		return this.historyService.removeFromHistory(input);
	}

	//#endregion

	//#region Last Active Workspace/File

	getLastActiveWorkspaceRoot(schemeFilter?: string): URI | undefined {
		return this.historyService.getLastActiveWorkspaceRoot(schemeFilter);
	}

	getLastActiveFile(schemeFilter: string): URI | undefined {
		return this.historyService.getLastActiveFile(schemeFilter);
	}

	//#endregion

	clear(): void {
		return this.historyService.clear();
	}
}

registerSingleton(IHistoryService2, HistoryService2);
