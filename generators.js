// define the flow of the application

function* test() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const gen = test();

for (const iterator of gen) {
  console.log(iterator);
}

// class Auth {
//     #login() {
//         console.log("login");
//     }

//     #logout() {
//         console.log("logout");
//     }

//     *authFlow() {
//         yield this.#login()
//         yield this.#logout()
//     }
// }

// const auth = new Auth();

// authFlow = auth.authFlow();
// authFlow.next()
// authFlow.next()

// function* payment() {
//     yield "check payment is done"
// }

// long polling
