from http.server import BaseHTTPRequestHandler
#from datetime import datetime

#name="Vi from main.py"
#print(name)

class handler(BaseHTTPRequestHandler):
  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/plain')
    self.end_headers()
    #self.wfile.write(str(datetime.now().strftime('%Y-%m-%d %H:%M:%S')).encode())
    name="Vi from main.py"
    self.wfile.write(name.encode())
    return