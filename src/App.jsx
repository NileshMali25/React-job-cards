import React from "react";
import Card from "./components/card";
import "./App.css";

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYd75h4FLQ6CSO2DYJkOJY9XEx6gvYu_goCewoVQdCBIPD6pKNlGAweQ&s",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4kDhts00k9A850S9tUmgay4YEJ-5D_4JMgWEoFHgLuLrYcYfFiQIWPc&s",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$50/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAkFBMVEX///+BvAYFpvD/ugjzUyUAo/D/twC92pR6uQD7z8bzThnyOADI4KiSxTv1eV2byVJSuPP/x1PB5PoAne//36j/wzuUz/f/2pT4qJjzSAv95N/4oI7i7s+62Y/H4KLyQwDyKACOwy/82ND0a0vT5riXx0iq0WrM6fs/s/L/5bf/xUf/0Gr/wTDb7/z+7s//36L62YWvAAAA5UlEQVR4nO3aV05CYQCE0WsFUaSJBRFQig1l/7vz4Y8ml9chQZLzLWByFjBVJWmvje6zHsvM+KkRNamhLqYPUbMyM2lmPddRrdOoyzJz1TyKakNBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEdJmraipr9onb5Cnq5zpqXmcWyE7WqJP2HXrtZb2Xm/aMX9VlD9c+yBmXm5jxruIU6jvpDnURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBHShqsJNX0CZ8Ba1rqK/bsDLzfZe1qSTttR9VofAdHuhbPwAAAABJRU5ErkJggg==",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Hyderabad, India"
    },
    {
  brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7c5ntMMlh2vFkMrDUU6bHBj5WdV3h1gH9w&s",
  companyName: "Netflix",
  datePosted: "3 days ago",
  post: "UI/UX Designer",
  tag1: "Part Time",
  tag2: "Mid Level",
  pay: "$30/hr",
  location: "Delhi, India"
},
{
  brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBT1SF77CpFwfc4qozSTfUTKtaNBeLnqQfRWIyxSmgnNqQWZG6SB7uOxk&s",
  companyName: "Meta",
  datePosted: "10 days ago",
  post: "React Developer",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$55/hr",
  location: "Pune, India"
},
{
  brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSQ13Ji_Ynw1MeY61NCPfMhrDSzxI73OshAPkrGbR8RWhSbvADoa7Ojs&s",
  companyName: "Apple",
  datePosted: "2 weeks ago",
  post: "iOS Developer",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$60/hr",
  location: "Mumbai, India"
},
{
  brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTRiw_dw53wYXu1-GbZ-XebSquDc9yp5yxYFDRcBn7z8aqtnWF-74zXw&s",
  companyName: "Tesla",
  datePosted: "6 days ago",
  post: "Data Analyst",
  tag1: "Part Time",
  tag2: "Junior Level",
  pay: "$28/hr",
  location: "Chennai, India"
},
{
  brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAbFBMVEX////6DwD4AAD8j436V1T5j435YF79z8/93Nz6dHT8oqL/+fn7mJf8wcD/8PD6cnL6e3z6bGv5ExD4Pjv5Q0H+6ej6hYb5WVj+9PP7gYD5UVD5ZmT9x8b8srL5IR7819b5NTT6S0r8urn4KidZjgcpAAADjUlEQVR4nO2a6VLDMAyEi2jTO9D7ohd9/3ekoTQ4iVd2iNTOMNqf1HI+7I0iH62WyWQymUwmk8lkMplMJpPJZDJlGpzbnGZdf1h3xoadBw2xXonVaeEPW8z4uNfGWC+M6B3FvfNxylhHFHd8JtYUB05ZrI4mFgHDZ+qygZqjBQ2f6Wr6Z2H1ucj+07CGXORQE6uDO6cZH8rMYmPLc1hjPnTMhOpNIs0Zw2dazHGs3iTSMhS71MNiRisc/AQsYjL8XVMYrIfFZPi7YKZX8xat1uHg9QpFa40WbWKiNyha61PNZ/i7UKbXwqJJXPgEhGthRRg+EzC9EhZt07jwdOuPV8KKMnwmv+mV3sSIDH/XA7Eoie8g8XaggxVp+Exe06tgURKVtG4a+oZLB6vWUn3wMKx6XTwIi3b+pinIZTtPFwoVBDL8x4f/7x7TK2DRG2g6Qd/Jt2ofCliohifkuWpNr4EFWvYJrrIfgEUjf8N1QrQD+WxU6UT8TUSGz4zN/aaLBTN8VsHQ1v9bJdPLY+397dLvdgRS114dC7S71VX4LdXFQmVl2r5hoWVauRtprEAmh18AVSy44Z23QpNc3BCXxgKGXwexiqYXXmLgDJ+3iMr0slgow/dOv1innr9NIdPLYk3BI90Zok+APtXCgiVNYSAuoJFb3shiAcMvir4BW6p7NSzQpngwEGN6SaxQKs0dCI7NnJQqmbdQBv8sf/DC5Y0gVo3aEzR0spsgFsgO5cHCxxs9FSzQorrhF04kclhohe87/b2Agc3X/XJYh9Cj3OEC/0LvII0Vb3huwu+ml8MCych/nIC+B0dxLPB7dSH/3TpQLkphoXceneqglPpz9CmEBasocBwAh+unMpPCqmV4btL7oljA8KPSjZ5Y08tg0QH9ukpcnZ2PMdgybB1IDguUNGW5LwC7YpTBQh+TsvIs/oLX/b2LFBZ/acWVW6dyphfZdovf8Harem6bRAIL7on6H5ljtcGu0vWFFcEKXFpxNY4w/bWNwB0bOkceaWY6OotUZMn0TBJYwUsrrgqLVLCfuRTBCtzwKaqQusAZ7ULigifK8EAuVgL2Bg8Cy9caR5q3gLDpu82x5jUMn8ldcqDrQem86SQuI+9h/KpgejCLk1qvka+DGue/N3UiMv2w9j9bfkj9ELcAQxf1mnqr9mC1Wptt+OL6H7o1mUwmk8lkMplMJpPJZDKZTP9SX+RhIx2J+PHgAAAAAElFTkSuQmCC",
  companyName: "Adobe",
  datePosted: "4 days ago",
  post: "Graphic Designer",
  tag1: "Contract",
  tag2: "Mid Level",
  pay: "$32/hr",
  location: "Noida, India"
},
{
  brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGB-ML3-g4Sla2mlzWUrvnjGdKan5mV36UUThDFZHJOMbdwfi7ZC_-pY&s",
  companyName: "Spotify",
  datePosted: "3 weeks ago",
  post: "Product Manager",
  tag1: "Full Time",
  tag2: "Senior Level",
  pay: "$65/hr",
  location: "Bangalore, India"
},
{
  brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAACUCAMAAAATdsOFAAAAYFBMVEUAAAD///8vLy+srKzIyMhvb2/t7e3f39+lpaUTExMQEBBMTEx/f3+KioogICDc3NxERES+vr5XV1doaGjz8/ORkZGcnJy2trb5+fnOzs4YGBg5OTl4eHgpKSlfX1/W1tbaHj1kAAADFklEQVR4nO2Z65KjIBBG8QKYSIyo8RJjeP+3XLlEIZmpyW5tdGvrO38caZk5kAbaDCEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wVVJ2V6C9uOydzWFuR4SqVMrvuI/QxtoijKwrYDn9vSeB7CfOXFPmI/Q9kP6meo/32gvgdQ34P31MeKCkHv5eGl/1jVN1pX8dJwLMsyn/sUZeW17qWeX4Y+0vCkDp+sM2UCTXoqXdPEOWd3Qjve9+3O6gdxjhZYUq7PFQlbI0rYxljf1Bd90kU7q/Okj3zU4l6mQcDNsVHvbJ+d1Z2XkqmbYuYyeBxsZOiki5wWdUf2/Ne2V+e2Pps6kwbc3FylGYdNk9gO476qN101TZ/dnN5Rl+HTNg9uJnvyRyTrzbp4qLP7R63fVe+O3uPNI2V0v2Zds8dO3wun3ovPm7+hfs79WOsWZLUktyPXnTqnzjcwf0M9DBrDlBA9ySx4C+ns9mPUk497kzfUWRUGE/tB6G5KnFaE3hBZbdW3yJffr2Fauwib6EtuO6tffXX11OFiJ/cbdbGhes1eU3MMZv2fVc+dpo8ZzlIIjGGHTLdVJtdl/sK0ofpVvR4g2m5Rb0KNSRcuqiD6wl9rYLKhOjHneVAnjcpXj2QgeOvt9i10iH7x+zZUp9ql8afdnqGLeu8fPJMeVjNX7QcdYv7uU9tafkN1Yqpxvh7pbR+qR8ybXFPnpvon+4lMS6Ri7LK1em78uJvbWLry3Cu/mot7tLTvRMa31Os7Gh5DFvO67WWxrbo5ZPTkypNoh+W9IqjXWVbFo3BB9w0ltfvjQMc4v9iKXZeYm6p7bxQW1fg7zDkMrqkv2FM/Uxxvqk6KNpCQZotZTtNc+kHuWVHlR5g9k7dVnyW6JVHUqSA6jYfY1uCcFKdFkbVBBTy2a6RzXxZsrU6ud5EMSsmW6sPzTimt5u08n6962yxpK5VKs1v13K+sL90wpMmtehTAh7kPHZ+f+yyHoii+/zfAdY4ev4tcv44AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDn/AIisCfZIzjtAAAAAABJRU5ErkJggg==",
  companyName: "Uber",
  datePosted: "1 day ago",
  post: "Mobile App Developer",
  tag1: "Full Time",
  tag2: "Junior Level",
  pay: "$40/hr",
  location: "Mumbai, India"
}
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, index) {
        return (
          <Card
            key={index}
            companyName={elem.companyName}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
            brandLogo={elem.brandLogo}
            datePosted={elem.datePosted}
          />
        );
      })}
    </div>
  );
};

export default App;