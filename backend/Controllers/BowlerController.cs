using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BowlingLeagueApi.Models;

namespace BowlingLeagueApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private readonly BowlingLeagueContext _context;

        public BowlerController(BowlingLeagueContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<object> GetBowlers()
        {
            var bowlerData = _context.Bowlers
                .Include(b => b.Team) // Join the Team table
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks") // Filter per instructions
                .Select(b => new 
                {
                    BowlerId = b.BowlerId,
                    FirstName = b.BowlerFirstName,
                    MiddleInit = b.BowlerMiddleInit,
                    LastName = b.BowlerLastName,
                    TeamName = b.Team.TeamName,
                    Address = b.BowlerAddress,
                    City = b.BowlerCity,
                    State = b.BowlerState,
                    Zip = b.BowlerZip,
                    PhoneNumber = b.BowlerPhoneNumber
                })
                .ToArray();

            return bowlerData;
        }
    }
}