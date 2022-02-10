import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

      ],
      declarations: [
        ContactComponent,
      ],
    }).compileComponents();
  });

  it('should create the contact', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const contact = fixture.componentInstance;
    expect(contact).toBeTruthy();
  });

  it(`should have as title 'my-college-project'`, () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const contact= fixture.componentInstance;
    expect(contact.title).toEqual('my-college-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-college-project app is running!');
  });
});
