from django.db import models

# Create your models here.


class emp(models.Model):
    fName = models.CharField(max_length=100)

    def __str__(self):
        return self.fName
