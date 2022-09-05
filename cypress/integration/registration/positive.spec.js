/// <reference types="cypress" />

let num = Math.floor((Math.random() * 100) + 1);

describe('Positive tests', () => {
  beforeEach(() => {
    cy.visit('https://www.links.hr/hr/register');
    cy.reload();
  })

  it('Sign up using valid data in mandatory fields', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });

  it.only('Sign up using valid data in all fields by choose checkbox "Ženski"', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('[type="radio"]').check('F').should('be.checked');
    cy.get('#FirstName').clear().type('ceca').should('have.value', 'ceca');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('[name="DateOfBirthDay"]').select('1').should('have.value', '1');
    cy.get('[name="DateOfBirthMonth"]').select('rujan').should('have.value', '9');
    cy.get('[name="DateOfBirthYear"]').select('2000').should('have.value', '2000');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#StreetAddress').clear().type('Cara Urosa').should('have.value', 'Cara Urosa');
    cy.get('.ui-autocomplete-input').eq(3).type('11');
    cy.contains('11000 BEOGRAD, Serbia').click();
    cy.get('.ui-autocomplete-input').eq(3).should('have.value', '11000');
    cy.get('.ui-autocomplete-input').eq(4).should('have.value', 'BEOGRAD');
    cy.get('#CountryId_dropdown').should('have.value', '85');
    cy.get('#Phone').clear().type('011123456').should('have.value', '011123456');
    cy.get('#Newsletter').click().should('be.checked');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  it('Verify Email contains dot with subdomain', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('email@' + num + 'subdomain.example.com');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  it('Verify Email with Number in the address are valid', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('1234567890' + num + '@gmail.com');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  it('Verify input field "Adresa ulice" with valid data', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#StreetAddress').clear().type('Cara Urosa').should('have.value', 'Cara Urosa');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  it('Verify input field "Grad" with 1 letter', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera');
    cy.get('#LastName').clear().type('peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('.ui-autocomplete-input').eq(4).clear().type('c');
    cy.contains('20210 CAVTAT, Croatia').click();
    cy.get('.ui-autocomplete-input').eq(3).should('have.value', '20210');
    cy.get('#CountryId_dropdown').should('have.value', '24');
    cy.get('.ui-autocomplete-input').eq(4).should('have.value', 'CAVTAT');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  it('Verify input field "Telefon" with valid number', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Phone').clear().type('011888777').should('have.value', '011888777');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
  it('Verify checkbox "Novosti" ', () => {
    cy.get('#eu-cookie-ok').click();
    cy.get('#FirstName').clear().type('pera').should('have.value', 'pera');
    cy.get('#LastName').clear().type('peric').should('have.value', 'peric');
    cy.get('#Email').clear().type('mrki.tester' + num + '@gmail.com');
    cy.get('#Newsletter').click().should('be.checked');
    cy.get('#Newsletter').click().should('not.be.checked');
    cy.get('#Newsletter').click().should('be.checked');
    cy.get('#Password').clear().type('La9 ,@');
    cy.get('#ConfirmPassword').clear().type('La9 ,@');
    cy.get('#register-button').click();
    cy.get('.result').should('contain.text', '\n            Poslan vam je e-mail koji sadrži upute za aktivaciju članstva.\n        ');
  });
});
