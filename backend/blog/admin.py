from django.contrib import admin
from .models import Blog

# Register your models here.


class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'body', 'created_at')


admin.site.register(Blog, BlogAdmin)
