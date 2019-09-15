export function login(params) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: params.name,
        password: params.password
      }, 1000)
    });
  });
}
