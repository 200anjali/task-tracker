package media.traversy.dto;

public class TaskDto {
	private int id;

	private String title;

	private String description;
	private String dueDate;
	private boolean reminder;

	private boolean isComplete;

	public TaskDto() {
	}

	public TaskDto(int id,String title, String description, String dueDate, boolean reminder,boolean isComplete) {
		super();
		this.id = id;
		this.title=title;
		this.description = description;
		this.dueDate = dueDate;
		this.reminder = reminder;
		this.isComplete = isComplete;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle(){return title;}

	public void setTitle(String title){this.title=title;}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDueDate() {
		return dueDate;
	}

	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}

	public boolean isReminder() {
		return reminder;
	}

	public void setReminder(boolean reminder) {
		this.reminder = reminder;
	}

	public boolean isComplete(){return isComplete;}

	public void setIsComplete(boolean isComplete){this.isComplete=isComplete;}

	@Override
	public String toString() {
		return "TaskDto [id=" + id + ", title="+title+", description=" + description + ", dueDate=" + dueDate + ", reminder=" + reminder+",isComplete="+isComplete + "]";
	}

}
