from rest_framework import serializers
from movie.models import Movie, Director, Writer


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'name', 'year', 'runtime', 'director', 'writer', 'status')

class DirectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Director
        fields = ('id', 'name', 'status')

class WriterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Writer
        fields = ('id', 'name', 'status')
