using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Xml.Linq;

namespace blogqueapi.Model
{
    public class BlogPost
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        [DataType(DataType.Date)]

        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime PublishDate { get; set; }

        [DefaultValue("https://tse2.mm.bing.net/th?id=OIP.wsVlPGCwZ8_WwYZmtpKbAAHaCZ&pid=Api&P=0")]
        public string? ImageURL { get; set; }

        public string? Category { get; set; }
        
    }
}
