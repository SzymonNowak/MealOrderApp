﻿using Burgermania.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Burgermania.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MealAddonController : ControllerBase
    {
        public MealAddonController(BurgermaniaContext context)
        {
            _context = context;
        }

        private readonly BurgermaniaContext _context;

        [HttpGet]
        public List<Category> Get()
        {
            return _context.Category.ToList();
        }

        [HttpGet("{id}")]
        public Category GetFirstElement(int id)
        {
            return _context.Category.First(category => category.Id == id);
        }

        [HttpPut("{id}")]
        public object Update(int id, Category categoryToUpdate)
        {
            var elementFromDataBase = _context.Category.First(category => category.Id == id);
            if(categoryToUpdate.Id != id)
            {
                return new { error = "zjebalo sie "};
            }
            elementFromDataBase.Title = categoryToUpdate.Title;
            _context.SaveChanges();
            return new { passs = "zaktualizowanao" };
        }


        [HttpPost]
        public void AddCategory(Category category)
        {
            _context.Category.Add(category);
            _context.SaveChanges();
        }
    }
}