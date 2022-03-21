import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

import { editorReducer } from '../../nindo/src/internal/reducers/editor.reducer';
import { userReducer } from '../../nindo/src/internal/reducers/user.reducer';
import { pluginReducer } from '../../nindo/src/internal/reducers/plugin.reducer';
import { TComponentType } from '../../nindo/src/external/types/component.types';

export const store: any = createStore(
    combineReducers({
        editor: editorReducer,
        user: userReducer,
        plugin: pluginReducer({
            data: {},
            description: '',
            galleryId: '',
            guid: '',
            modelVersion: 1,
            name: 'My App',
            planFeatures: {},
            previewImage: '',
            privacy: 'public',
            status: 'published',
            type: 'app' as TComponentType
        })
    }),
    applyMiddleware(thunk)
);

export const ProviderWrapper = ({ children }: any) => (
    <Provider store={store}>
        <BrowserRouter>
            {children}
        </BrowserRouter>
    </Provider>
);
