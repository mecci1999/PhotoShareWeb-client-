import { Module } from 'vuex';
import { RootState } from '../app/app.store';
import {
  postIndexStoreModule,
  PostIndexStoreState,
} from './index/post-index.store';

import {
  postShowStoreModule,
  PostShowStoreState,
} from './show/post-show.store';

import {
  PostCreateStoreState,
  postCreateStoreModule,
} from '@/post/create/post-create.store';

import {
  postEditStoreModule,
  PostEditStoreState,
} from './edit/post-edit.store';

import { PostDestroyStoreState, postDestroyStoreModule } from '@/post/destroy/post-destroy.store';
import { PostSideSheetStoreState, postSideSheetStoreModule } from '@/post/side-sheet/post-side-sheet.store';

export interface PostItem {
  id: number;
  title: string;
  content: string;
}

export interface PostStoreState {
  sideSheet: PostSideSheetStoreState;
  destroy: PostDestroyStoreState;
  edit: PostEditStoreState;
  create: PostCreateStoreState;
  index: PostIndexStoreState;
  show: PostShowStoreState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    sideSheet: postSideSheetStoreModule,
    destroy: postDestroyStoreModule,
    edit: postEditStoreModule,
    create: postCreateStoreModule,
    index: postIndexStoreModule,
    show: postShowStoreModule,
  },
};
