using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace blogqueapi.Model
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string Username { get; set; }=string.Empty;
        public byte[] PasswordHash { get; set; } = Array.Empty<byte>();
        public byte[] PasswordSalt { get; set; } = Array.Empty<byte>();
        public List<BlogPost>? BlogPosts { get; set; }
        //public ICollection<Comment>? Comments { get; set; }
    }
}
