using System.ComponentModel.DataAnnotations;

namespace MasterSignalR.Models
{
	public class ChatRoom
	{
		public int Id { get; set; }

		[Required]
		public string Name { get; set; }
	}
}
