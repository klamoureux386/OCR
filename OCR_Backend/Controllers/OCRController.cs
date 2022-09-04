using Microsoft.AspNetCore.Mvc;
using OCR_Backend.Services;

namespace OCR_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OCRController : Controller
    {
        [HttpGet]
        public IActionResult GetOCR()
        {
            //To do: convert to DI
            return Ok(new OCRService().OCRServiceTest());
        }
    }
}
