from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BlogSerializer
from .models import Blog


class BlogView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
