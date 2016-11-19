export class Employee
{
	public Id:			number;
	public UserID:		string;
	public FirstName:	string;
	public LastName:	string;
	public City:		string;

	constructor() {
		this.Id		   = 0;
		this.UserID    = "";
		this.FirstName = "";
		this.LastName  = "";
		this.City      = "";
	}
}