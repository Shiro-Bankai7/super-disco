/**
 * Component Demo/Test Page
 * 
 * This file demonstrates the usage of Button and Icon components.
 * Can be used for visual testing and documentation.
 */

import { Button } from './Button';
import { Icon } from './Icon';
import { CheckIcon, ArrowRightIcon, LeafIcon, BoltIcon } from './icons';

export default function ComponentDemo() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="p-8 space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Button Variants</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" onClick={handleClick}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Secondary Button
          </Button>
          <Button variant="ghost" onClick={handleClick}>
            Ghost Button
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Button Sizes</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <Button size="sm" onClick={handleClick}>
            Small
          </Button>
          <Button size="md" onClick={handleClick}>
            Medium
          </Button>
          <Button size="lg" onClick={handleClick}>
            Large
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Buttons with Icons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button
            variant="primary"
            icon={
              <Icon size="sm" decorative>
                <CheckIcon />
              </Icon>
            }
            onClick={handleClick}
          >
            With Icon
          </Button>
          <Button
            variant="secondary"
            icon={
              <Icon size="sm" decorative>
                <ArrowRightIcon />
              </Icon>
            }
            onClick={handleClick}
          >
            Learn More
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Button as Link</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" href="#demo">
            Link Button
          </Button>
          <Button
            variant="secondary"
            href="#demo"
            icon={
              <Icon size="sm" decorative>
                <ArrowRightIcon />
              </Icon>
            }
          >
            External Link
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Disabled State</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary" disabled onClick={handleClick}>
            Disabled Primary
          </Button>
          <Button variant="secondary" disabled onClick={handleClick}>
            Disabled Secondary
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Icon Sizes</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <Icon size="xs" ariaLabel="Extra small leaf icon">
            <LeafIcon />
          </Icon>
          <Icon size="sm" ariaLabel="Small leaf icon">
            <LeafIcon />
          </Icon>
          <Icon size="md" ariaLabel="Medium leaf icon">
            <LeafIcon />
          </Icon>
          <Icon size="lg" ariaLabel="Large leaf icon">
            <LeafIcon />
          </Icon>
          <Icon size="xl" ariaLabel="Extra large leaf icon">
            <LeafIcon />
          </Icon>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Icon Colors</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <Icon size="lg" className="text-primary-500" ariaLabel="Green bolt">
            <BoltIcon />
          </Icon>
          <Icon size="lg" className="text-neutral-700" ariaLabel="Gray bolt">
            <BoltIcon />
          </Icon>
          <Icon size="lg" className="text-semantic-error" ariaLabel="Red bolt">
            <BoltIcon />
          </Icon>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Analytics Tracking</h2>
        <div className="flex gap-4 flex-wrap">
          <Button
            variant="primary"
            analyticsId="hero-cta"
            analyticsLocation="demo-page"
            onClick={handleClick}
          >
            Tracked Button
          </Button>
          <p className="text-sm text-neutral-600">
            (Check console for dataLayer events)
          </p>
        </div>
      </section>
    </div>
  );
}
