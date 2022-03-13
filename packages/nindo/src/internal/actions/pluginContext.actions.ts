import { IPluginContext } from '../../external/types/context.types';

export const contextUpdated = (
	updatedState: Partial<IPluginContext>
) => ({
	type: 'CONTEXT_UPDATED',
	data: updatedState,
});
