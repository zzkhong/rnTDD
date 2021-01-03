const CONTEXT = 'HOME';

export const SET_TITLE = `${CONTEXT}/SET_TITLE`;

export const setTitle = (title: string) => ({
  type: SET_TITLE,
  title,
});
