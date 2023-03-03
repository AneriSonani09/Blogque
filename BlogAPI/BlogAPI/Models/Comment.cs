using System.ComponentModel.DataAnnotations;

namespace BlogAPI.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; }
        [DataType(DataType.Date)]

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime PublishDate { get; set; }
        public User Author { get; set; }
        public BlogPost BlogPost { get; set; }
    }
}
