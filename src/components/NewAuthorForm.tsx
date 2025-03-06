import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const NewAuthorForm = () => {
    return (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>new Authors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 bg-red-800"></div>
                <Button variant='ghost' className="h-8">
                <Link to="/create-authors">Add new author</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      );
}

export default NewAuthorForm
