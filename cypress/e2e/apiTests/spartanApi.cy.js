/* eslint-disable prettier/prettier */


describe('Spartan API tests', { baseUrl: 'http://54.91.133.248:8000/'}, () => {

it('Get a single spartan', () => {
    cy.request('GET', 'api/spartans/100').then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal('Terence');
    })  
})

it('Post one spartan test', () => {
    cy.request({
        
        method : 'POST',
        url : 'api/spartans',
        body : {
            "gender" : "Male",
            "name" : "Vedo",
            "phone" : "5065472285"
        }
    }
        
    ).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body.success).to.equal("A Spartan is Born!");
        expect(response.body.data.name).to.equal("Vedo");
    })   
})

});
