from django.contrib import admin
from .models import Phrase, Example, Question

# Register your models here.
admin.site.register(Phrase)
admin.site.register(Example)
admin.site.register(Question)