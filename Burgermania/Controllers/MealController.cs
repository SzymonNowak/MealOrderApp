﻿using Burgermania.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Burgermania.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MealController : ControllerBase
    {
        public MealController(BurgermaniaContext context)
        {
            _context = context;
        }

        private readonly BurgermaniaContext _context;

        [HttpGet]
        public List<Meal> Get()
        {

            List<Meal> list = _context.Meal.Include(meal => meal.Category).Include(meal => meal.MeatCategory).ToList();
            return list;
        }

        [HttpGet("{id}")]
        public Meal GetFirstElement(int id)
        {
            return _context.Meal.First(meal => meal.Id == id);
        }

        [HttpPut("{id}")]
        public object Update(int id, Meal meal)
        {
            var elementFromDataBase = _context.Meal.First(x => x.Id == meal.Id);
            if(meal.Id != id)
            {
                return new { error = "zjebalo sie "};
            }
            elementFromDataBase.Title = meal.Title;
            _context.SaveChanges();
            return new { passs = "zaktualizowanao" };
        }


        [HttpPost]
        public void AddMeal(Meal meal)
        {
            Category cateogry = _context.Categories.FirstOrDefault(x => x.Id == meal.Category.Id);
            MeatCategory meatCateogry = _context.MeatCategory.FirstOrDefault(x => x.Id == meal.MeatCategory.Id);
            meal.MeatCategory = meatCateogry;
            meal.Category = cateogry;
            _context.Meal.Add(meal);
            _context.SaveChanges();
        }
        [HttpDelete]
        public IActionResult RemoveMeal(Meal meal)
        {
            var elementFromDataBase = _context.Meal.FirstOrDefault(x => x.Id == meal.Id);
            if (elementFromDataBase == null)
            {
                return NotFound();
            }
            _context.Meal.Remove(elementFromDataBase);
            _context.SaveChanges();
            return Ok(elementFromDataBase);

        }
    }
}
