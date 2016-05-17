from django.shortcuts import render
from rest_framework import viewsets
from movie.models import Movie
from movie.serializers import MovieSerializer
from rest_framework import filters


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = (filters.OrderingFilter, filters.SearchFilter)
    ordering_fields = ('name','year')
    search_fields = ('name',)
