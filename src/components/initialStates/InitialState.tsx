interface initialStateInterf {
  isLogged: boolean;
  nickname: string;
}
export const initialState: initialStateInterf = {
  isLogged: false,
  nickname: "guest",
};

export default initialState;
