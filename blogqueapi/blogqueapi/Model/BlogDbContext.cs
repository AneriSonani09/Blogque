using Microsoft.EntityFrameworkCore;

namespace blogqueapi.Model
{
    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions<BlogDbContext> options)
            : base(options)
        {
        }

        public DbSet<BlogPost> BlogPosts { get; set; }

        public DbSet<User> Users { get; set; }

        

    }
}
