from django.shortcuts import render
from rest_framework import viewsets
from movie.models import Movie, Director, Writer
from movie.serializers import MovieSerializer, DirectorSerializer, WriterSerializer
from rest_framework import filters


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter)
    ordering_fields = ('name','year')
    search_fields = ('name',)


class DirectorViewSet(viewsets.ModelViewSet):
    queryset = Director.objects.all()
    serializer_class = DirectorSerializer


class WriterViewSet(viewsets.ModelViewSet):
    queryset = Writer.objects.all()
    serializer_class = WriterSerializer
