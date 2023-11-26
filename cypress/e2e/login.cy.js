/* eslint-disable linebreak-style */

// Login
// - Menampilkan halaman login dengan benar
// - Menampilkan alert jika email yang diinputkan kosong
// - Menampilkan alert jika password yang diinputkan kosong
// - Menampilkan alert jika email/password salah
// - Menampilkan home page dengan tombol yang mengindikasikan user telah login

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });
  // Scenario 1
  it('Menampilkan halaman login dengan benar', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    // button login secara default berbahasa indonesia
    cy.get('button').contains(/^Masuk$/).should('be.visible');
  });

  // Scenario 2
  it('Menampilkan alert jika email yang diinputkan kosong', () => {
    cy.get('button').contains(/^Masuk$/).click();
    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  // Scenario 3
  it('Menampilkan alert jika password yang diinputkan kosong', () => {
    // mengisi username
    cy.get('input[type="email"]').type('tes123@gmail.com');

    // klik tombol login tanpa mengisi password
    cy.get('button').contains(/^Masuk$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  // Scenario 4
  it('Menampilkan alert jika email/password salah', () => {
    // mengisi email
    cy.get('input[type="email"]').type('testuser@gmail.com');

    // mengisi password yang salah
    cy.get('input[type="password"]').type('wrong_password');

    // menekan tombol Login
    cy.get('button').contains(/^Masuk$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  // Scenario 5
  it('Menampilkan home page dengan tombol yang mengindikasikan user telah login', () => {
    // mengisi username
    cy.get('input[type="email"]').type('rayhan@gmail.com');

    // mengisi password
    cy.get('input[type="password"]').type('12345678');

    // menekan tombol Login
    cy.get('button').contains(/^Masuk$/).click();

    // Verifikasi bahwa elemen yang berada di homepage ditampilkan
    // - jika user sudah login, ada tombol buat utas.
    // - karena cypress memiliki resolusi default 1000x660, jadi menu sidebar tidak terlihat.
    // - jadi, cari tombol btn-toggle-side-menu, klik, supaya sidemenu muncul
    // - verifikasi ada tombol buat utas

    cy.get('button[id="btn-toggle-side-menu"]').should('be.visible');
    cy.get('button[id="btn-toggle-side-menu"]').click();
    cy.get('#fixed-side-menu').contains('Buat Utas').should('be.visible');
    cy.get('#btn-close-side-menu').click();
  });
});
