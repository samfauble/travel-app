
import {port} from "../src/server/server"
import {city} from "../src/client/js/getWeather"
import {cityName} from "../src/client/js/getImage"

//getWeather tests
test("city", ()=>{
  it("should equal innerHTML of 'city'", () =>{
      expect(document.getElementById("city").innerHTML).toBe(city);
  });
});


  //server test
  test("port is on 3000", () => {
    expect(port).toBe(3000);
  });

//getImage tests
test("cityName", ()=>{
  it("should equal innerHTML of 'cityName'", () =>{
      expect(document.getElementById("city").innerHTML).toBe(cityName);
  });
});