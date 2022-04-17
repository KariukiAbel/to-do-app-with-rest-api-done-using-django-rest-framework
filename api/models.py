from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length = 255)
    completed = models.BooleanField(default=False, null=True, blank=True)
    date_added = models.DateField(auto_now = True)
    
    def __str__(self):
        return self.title