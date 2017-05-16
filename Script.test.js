
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('kontakt', function () {

  beforeEach(function (done) {
    console.log('loading')
    // load the index.html page into the window
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      document.body.innerHTML = this.responseText
      done()
    });
    oReq.open("GET", "base/index.html");
    oReq.send();
  });

  afterEach(function () {
    document.body.innerHTML = '<h1>between tests</h1>'
  })

  it('should set the form to visible', function() {

    // act
    kontakt();

    // assert
    expect(document.getElementById("forma")).to.exist
    
    var style = document.getElementById("forma").style
    expect(style.visibility).to.equal('visible')
  })

  it('should reset the form to invisible', function() {

    // act
    kontakt();
    kontakt();

    // assert
    expect(document.getElementById("forma")).to.exist
    
    var style = document.getElementById("forma").style
    expect(style.visibility).to.equal('hidden')
  })
})