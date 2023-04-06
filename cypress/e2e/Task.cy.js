require('cypress-xpath');
before(() => {
    cy.intercept("https://api-js.mixpanel.com/**", {});
    cy.intercept("https://m.stripe.com/**",{});
    cy.intercept(" https://cdn.segment.com/**",{});
    cy.intercept("https://bam.nr-data.net/**",{});
    cy.intercept("https://content-firebaseappcheck.googleapis.com/**",{});
    //cy.intercept("https://o128332.ingest.sentry.io/**",{});
    cy.intercept('GET', '**/bookings/**').as('getData')
    
      
    Cypress.on('uncaught:exception', (err, runnable) => {
        // we can't guarantee that a failure is a promise rejection,
        // so we'll just log the error to the console and allow the test to continue
        console.error('Uncaught exception:', err)
        return false
      })
    });
describe('Login',()=>{
    before(function(){
        cy.fixture('urlData').then(function(data){
            this.data=data
            // cy.intercept("",{});
            // cy.intercept("",{});
        })
    })
    it('Visit website',function(){
        cy.visit(this.data.url)
        cy.get("div.MuiBox-root.jss1 div.MuiBox-root.jss2:nth-child(1) div.MuiBox-root.jss3:nth-child(3) div.MuiBox-root.jss6:nth-child(5) div.MuiBox-root.jss7 div.MuiBox-root.jss8 > a.MuiTypography-root.MuiLink-root.MuiLink-underlineHover.MuiTypography-colorPrimary").click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[2]/div[1]/input[1]').type(this.data.email)
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/input[1]').type(this.data.password)
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[3]/button[1]').click()
    });
    it('Booking Location',function(){
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/button[1]").click()
        // Block the API call
        cy.intercept('GET', '**/bookings/last**', {
            forceNetworkError: true
            })
        //For performance testing we use lighthouse
        cy.lighthouse(
            {
                performance: 60,
                accessibility: 90,
                'best-practices': 80,
                seo: 80,
            })
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/input[1]').type('{selectall}{backspace}').type('Leichhardt NSW 2040')
        cy.wait(2000)
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[2]/div[1]/button[1]/div[1]").click()
        cy.wait(2000)
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/button[1]/div[1]/p[1]').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/button[1]').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/button[1]/div[1]/p[1]').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[2]/div[1]/button[1]/div[1]').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[3]/div[1]/div[1]/button[1]/div[1]/p[1]').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[3]/div[1]/div[2]/div[1]/button[1]').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[5]/div[1]/div[1]/button[1]/div[1]/p[1]').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[7]/div[5]/div[1]/div[2]/div[1]/button[2]').click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[8]/div[2]/div[1]/textarea[1]').type('{selectall}{backspace}').type('Town ')
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/button[2]').click()
    });
    it('Booking Location',function(){
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[3]/div[1]/div[2]/div[1]/button[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/div[1]/div[1]/div[2]/button[1]/div[1]").click()
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/div[2]/div[1]/button[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[2]/div[3]/button[2]").click()
        
    });
    it('Select the Recipient Details',function(){
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/button[1]/button[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[2]/div[3]/button[2]").click()
    })
    it('Peak Hour Verification', function(){
        cy.xpath("//div[contains(text(),'14')]").click()
        //Selecting  7AM in Non Weekend Time
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/button[5]").click({force: true})
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/button[1]").click({force: true})
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[2]/div[3]/button[2]").click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]').should('contain','$20')
        cy.log('Selecting 7AM in Non Weekend Days should add only $20')
        cy.go(-1); 
        //Selecting  6PM in Non Weekend Time
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/button[49]").click({force: true}) 
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/button[1]").click({force: true}) 
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[2]/div[3]/button[2]").click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]').should('contain','$20')
        cy.log('Selecting 6PM in Non Weekend Days should add only $20')
        cy.go(-1); 
        //Selecting  10PM in Non Weekend Time
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/button[65]").click({force: true}) 
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/button[1]").click({force: true}) 
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[2]/div[3]/button[2]").click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]').should('contain','$40')
        cy.log('Selecting 10PM in Non Weekend Days should add $40')
        cy.go(-1); 
        //Selecting  7AM in Saturday
        cy.xpath("//div[contains(text(),'22')]").click()
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/button[5]").click({force: true}) 
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/button[1]").click({force: true}) 
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[2]/div[3]/button[2]").click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]').should('contain','$40')
        cy.log('Selecting 7AM in Weekend Days should add only $40')
        cy.go(-1); 
        //Selecting  11AM in Sunday
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[4]/div[7]").click()
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/button[21]").click({force: true})
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/button[1]").click({force: true})  
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[2]/div[3]/button[2]").click()
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]').should('contain','$20')
        cy.log('Selecting 11AM in Weekend Days should add only $20')
        cy.go(-1); 
    })
    it('Select Date/Time', function(){
        cy.xpath("//div[contains(text(),'15')]").click()
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/button[37]").click({force: true})
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]/button[1]/div[1]/p[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[2]/div[1]/button[5]").click({force: true})
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[2]/div[3]/button[2]").click()
    })
    it('Place a Book', function(){
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/button[1]/button[1]").click()
        cy.xpath("//body/div[@id='root']/div[1]/div[1]/div[3]/div[2]/div[3]/button[1]").click()
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]").should('contain','Your booking')
    })
})