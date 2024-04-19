from django.db import models

class Phrase(models.Model):
    phrase = models.CharField(max_length=200)
    def __str__(self):
        return self.phrase
    

class Example(models.Model):
    phrase = models.ForeignKey(Phrase, on_delete=models.CASCADE)
    example = models.CharField(max_length=200)
    def __str__(self):
        return self.example
    

class Question(models.Model):
    phrase = models.ForeignKey(Phrase, on_delete=models.CASCADE)
    question = models.CharField(max_length=200)
    def __str__(self):
        return self.question



# Create grammatical questions for each phrase

