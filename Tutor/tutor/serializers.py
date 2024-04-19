from rest_framework import serializers
from .models import Phrase, Example, Question


class PhraseSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Phrase
        fields = '__all__'

class ExampleSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Example
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Question
        fields = '__all__'

