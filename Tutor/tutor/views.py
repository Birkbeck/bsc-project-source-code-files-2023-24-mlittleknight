from django.shortcuts import render
from .models import Phrase, Example, Question
from .serializers import PhraseSerializer, ExampleSerializer, QuestionSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets


# Create your views here.
@api_view(['GET'])
def home(request):
    return Response('Hello World!')

@api_view(['GET', 'POST'])
def phrases(request):
    if request.method == 'GET':
        phrases = Phrase.objects.all()
        serializer = PhraseSerializer(phrases, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PhraseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


#endpoint that returns exapmples for a given phrase passed as query parameter
@api_view(['GET', 'POST'])
def examples(request):
    if request.method == 'GET':
        phrase_id = request.GET.get('phrase_id')
        
        if phrase_id:
            examples = Example.objects.filter(phrase_id=phrase_id)
        else:
            examples = Example.objects.all()
        
        serializer = ExampleSerializer(examples, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ExampleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

#endpoint that returns questions for a given phrase passed as query parameter
@api_view(['GET', 'POST'])
def questions(request):
    if request.method == 'GET':
        phrase_id = request.GET.get('phrase_id')
    
        if phrase_id:
            examples = Question.objects.filter(phrase_id=phrase_id)
        else:
            examples = Question.objects.all()
    
        serializer = QuestionSerializer(examples, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = QuestionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
