import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div class="sm:flex items-center max-w-screen-lg mx-auto my-1">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <span class="text-gray-500 border-b-primary border-primary uppercase">
              About us
            </span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span class="text-primary">How UniExchange work?</span>
            </h2>
            <p class="text-gray-700">
              <ol class="list-decimal list-inside text-justify">
                <li class="mb-2">
                    <strong class="text-primary">Campus only: </strong> 
                     Verified with university emails     
                </li>
                <li class="mb-2">
                    <strong class="text-primary">No shipping: </strong> 
                     Meet on campus, no shipping fees   
                </li>
                <li class="mb-2">
                    <strong class="text-primary">Save money: </strong> 
                     Student prices for students budgets     
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
