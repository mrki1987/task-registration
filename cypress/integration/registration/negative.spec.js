/// <reference types="cypress" />

let num = Math.floor((Math.random() * 100) + 1);

describe('Positive tests', () => {
  beforeEach(() => {
    cy.visit('https://www.links.hr/hr/register');
    cy.reload();
  })

  it('Sign up leaving "Ime" field empty', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').should('be.empty');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.field-validation-error').contains('Ime je potrebno').should('be.visible');
  });
  it('Sign up leaving "Prezime" field empty', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#LastName').should('be.empty');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.field-validation-error').contains('Prezime je potrebno').should('be.visible');
  });
  // bug
  it('Check "Ime" field inserting "." ', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('.').should('have.value', '.');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  //bug
  it('Check "Prezime" field inserting "." ', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('.').should('have.value', '.');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  // bug
  it('Check "Ime" field inserting 101 characters', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('field insert "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1')
      .should('have.value', 'field insert "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  //bug
  it('Check "Prezime" field inserting 101 characters', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('field insert "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1')
      .should('have.value', 'field insert "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  //bug
  it('Check "Ime" field inserting 1 character', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('a').should('have.value', 'a');
    cy.get('#register-button').click();
    cy.get('.field-validation-error').contains('Ime je potrebno').should('be.visible');
  });
  //bug
  it('Check "Prezime" field inserting 1 character', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#LastName').clear().type('a').should('have.value', 'a');
    cy.get('#register-button').click();
    cy.get('.field-validation-error').contains('Prezime je potrebno').should('be.visible');
  });
  //bug
  it('Check "Ime" field inserting 1 number', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('2').should('have.value', '2');
    cy.get('#register-button').click();
    cy.get('.field-validation-error').contains('Ime je potrebno').should('be.visible');
  });
  //bug
  it('Check "Prezime" field inserting 1 number', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#LastName').clear().type('3').should('have.value', '3');
    cy.get('#register-button').click();
    cy.get('.field-validation-error').contains('Prezime je potrebno').should('be.visible');
  });
  //bug
  it('Sign up choosing future birth date', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('ceca').should('have.value', 'ceca');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('[name="DateOfBirthDay"]').select('1').should('have.value', '1');
    cy.get('[name="DateOfBirthMonth"]').select('studeni').should('have.value', '11');
    cy.get('[name="DateOfBirthYear"]').select('2022').should('have.value', '2022');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  //bug
  it('Verify the email field with Missing @', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester.gmail.com');
    cy.get('#register-button').click();
    cy.get('.field-validation-error').contains('Pogrešan e-mail').should('be.visible');
  });
  //bug
  it('Verify the email field with Missing domain', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrkitest@test');
    cy.get('#register-button').click();
    cy.get('.field-validation-error').contains('Pogrešan e-mail').should('be.visible');
  });
  //bug
  it('Verify the email filed with Two @ sign', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('tester@@gmail.com');
    cy.get('#register-button').click();
    cy.get('.field-validation-error').contains('Pogrešan e-mail').should('be.visible');
  });
  //bug
  it('Verify input field "Adresa ulice" with 1 number', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#StreetAddress').clear().type('1').should('have.value', '1');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  //bug
  it('Verify input field "Adresa ulice" with 1 character', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#StreetAddress').clear().type('A').should('have.value', 'A');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  //bug
  it('Verify input field "Adresa ulice" with special character', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#StreetAddress').clear().type('+=').should('have.value', '+=');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  it('Verify input field "Poštanski broj" with letter', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('.ui-autocomplete-input').eq(3).type('test').should('have.value', 'test');
    cy.get('#register-button').click();
    cy.get('.ui-autocomplete-input').eq(3).should('be.empty');
  });
  //bug
  it('Verify input field "Grad" with number', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera');
    cy.get('#LastName').clear().type('peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('.ui-autocomplete-input').eq(4).clear().type('2');
    cy.contains('23274 23274, Croatia').click();
    cy.get('.ui-autocomplete-input').eq(3).should('have.value', '23274');
    cy.get('#CountryId_dropdown').should('have.value', '24');
    cy.get('.ui-autocomplete-input').eq(4).should('have.value', '23274');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  //bug
  it('Verify input field "Telefon" with only 1 number', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Phone').clear().type('1').should('have.value', '1');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  //bug
  it('Verify input field "Telefon" with letter and some special characters', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Phone').clear().type('Abv{i.?').should('have.value', 'Abv{i.?');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  it('Verify "Lozinka" field leaving empty', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear();
    cy.get('#register-button').click();
    cy.get('[for="Password"]').should('contain.text', 'Lozinka je potrebna');
  });
  it('Verify "Lozinka" field and "Potvrdite Lozinku" field leaving empty', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear();
    cy.get('#ConfirmPassword').clear();
    cy.get('#register-button').click();
    cy.get('[for="Password"]').should('contain.text', 'Lozinka je potrebna');
    cy.get('[for="ConfirmPassword"]').should('contain.text', 'Lozinka je potrebna');
  });
  it('Verify "Lozinka" field insert 1 character', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear().type('A');
    cy.get('#register-button').click();
    cy.get('[for="Password"]').should('contain.text', 'Lozinka treba imati najmanje 6 znakova.');
  });
  it('Verify "Lozinka" field and "Potvrdite Lozinku" field with different password', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear().type('test12');
    cy.get('#ConfirmPassword').clear().type('tester');
    cy.get('#register-button').click();
    cy.get('.field-validation-error').contains('Lozinka i potvrda lozinke se ne podudaraju.').should('be.visible');
  });
});