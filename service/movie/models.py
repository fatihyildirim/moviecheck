from __future__ import unicode_literals
from django.db import models as m


class Movie(m.Model):
	name = m.CharField(max_length=200)
	year = m.IntegerField(blank=True, null=True)
	runtime = m.IntegerField(blank=True, null=True)
	director = m.CharField(max_length=200, blank=True, null=True)
	status = m.BooleanField(default=False)

	def __unicode__(self):
		return '%s' % self.name
