using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace BlogAPI.Models
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        [DataType(DataType.Date)]

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime PublishDate { get; set; }
        public int AuthorId { get; set; }
        public User Author { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
