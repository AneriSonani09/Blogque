using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace blogqueapi.Migrations
{
    /// <inheritdoc />
    public partial class changed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BlogPosts_Users_AuthorId",
                table: "BlogPosts");

            migrationBuilder.AlterColumn<int>(
                name: "AuthorId",
                table: "BlogPosts",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "BlogId",
                table: "BlogPosts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_BlogPosts_Users_AuthorId",
                table: "BlogPosts",
                column: "AuthorId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BlogPosts_Users_AuthorId",
                table: "BlogPosts");

            migrationBuilder.DropColumn(
                name: "BlogId",
                table: "BlogPosts");

            migrationBuilder.AlterColumn<int>(
                name: "AuthorId",
                table: "BlogPosts",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_BlogPosts_Users_AuthorId",
                table: "BlogPosts",
                column: "AuthorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
