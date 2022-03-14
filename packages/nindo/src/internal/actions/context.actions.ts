import { IAppContext } from '../../external/types/context.types';

export const contextUpdated = (
	updatedState: Partial<IAppContext>
) => ({
	type: 'CONTEXT_UPDATED',
	data: updatedState,
});
