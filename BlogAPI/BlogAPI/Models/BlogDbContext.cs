using Microsoft.EntityFrameworkCore;
using BlogAPI.Models;
namespace BlogAPI.Models
{
    using Microsoft.EntityFrameworkCore;

    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions<BlogDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<BlogPost> BlogPosts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(u => u.BlogPosts)
                .WithOne(b => b.Author)
                .HasForeignKey(b => b.AuthorId);

            modelBuilder.Entity<BlogPost>()
                .HasOne(b => b.Author)
                .WithMany(u => u.BlogPosts)
                .HasForeignKey(b => b.AuthorId);

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<BlogAPI.Models.Comment> Comment { get; set; } = default!;
    }

}
