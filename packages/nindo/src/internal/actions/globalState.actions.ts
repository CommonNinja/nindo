export const globalStateUpdated = (updatedState: any) => ({
	type: 'GLOBAL_STATE_UPDATED',
	data: updatedState,
});
